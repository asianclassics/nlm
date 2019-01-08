import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import Footer from './Footer';
import Posts from './Posts'
import Archives from './Archives'

import { defaultLanguage, 
  setLanguage, 
  LanguageArray,
  setPage } from '../actions'

import { withNamespaces } from 'react-i18next'


class Page extends Component {

  constructor(props) {
    super(props);

    this.setNumber = {
      0: 'one',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four'
    }
  }

  componentWillMount() { 
    this.languageCheckAndUpdate() 
  }

  componentDidUpdate() {
    window.onpopstate  = (e) => {
      e.preventDefault()
      this.languageCheckAndUpdate()
    }
  }

  languageCheckAndUpdate() {
    const { history, url, selectedPage, dispatch, t } = this.props;
    if(url.split('/')[2] !== undefined) {
      if(Object.keys(t('pages')).includes(url.split('/')[2])) {
        dispatch(setPage('arch'))
      } else {
        dispatch(setPage('home'))
        history.push(`/${url.split('/')[1]}`)
      }
    } else {
      dispatch(setPage('home'))
    }
    if(LanguageArray.includes(url.split('/')[1])) {  
      this.setLang(url.split('/')[1], selectedPage)
    } else {
      this.setLang(defaultLanguage, selectedPage)
      history.push(defaultLanguage)
    }  
  }

  setLang = (lng) => {
    const { i18n, dispatch } = this.props;
    i18n.changeLanguage(lng) // change locale
    dispatch(setLanguage(lng)) // set redux language

  }

  resetPage = () => {
    this.props.dispatch({ type: 'SET_PAGE', page: 'home' });
  }

  renderPage(selectedPage, pages) {
    if (!pages.some(e => e.slug.substring(0,4) === selectedPage)) {
      console.log('page not there');
      this.resetPage();
    }
    return pages
      .filter(page => page.slug.substring(0,4) === selectedPage)
      .map((page, i) => {
        let mediaURL = null
        if(page._embedded["wp:featuredmedia"]) {
          mediaURL = page._embedded["wp:featuredmedia"][0].source_url
        }
        return (
          <div key={page.slug}>
          
          <section 
            id="banner" 
            key={page.id}
            style={{
              backgroundImage: 
                `linear-gradient(to bottom, 
                  rgba(239, 239, 239,0.1) 50%,
                  rgba(239, 239, 239,1.0) 100%), 
                  url(${mediaURL})`
            }}>
            <header className="major">
              <span className="icon fa-book style7"></span>
              <h1>{page.acf.title}</h1>
              <h3>{page.acf.subtitle}</h3>
              {/* {this.props.t('description.part2')} */}
            </header>
          </section>
          {selectedPage === 'home' ? null : 
          <section className={`wrapper special style1`}>
            <div className="inner-page">
                <section className="spotlights">
                  <p dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                </section>
            </div>
          </section>
          }
          </div>
        )
    })
  }

  render() {
   
    if(this.props.fetchingPages || this.props.fetchingPosts) {
        return (
          <div className="blinky">{this.props.t('technical.loading')}</div>
        );
    }
    return (
      <div className="container">
        <Header />
        
        { this.renderPage(this.props.selectedPage, this.props.pages) }
        { this.props.selectedPage === 'home' ? <Posts /> : null }
        { this.props.selectedPage === 'arch' ? <Archives /> : null }
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  //console.log('state in Page component', state)
  //console.log('ownProps in Page component', ownProps)
  return {
    router: state.router,
    url: state.router.location.pathname,
    fetchingPages: state.pages.isFetching,
    selectedLanguage: state.selectedLanguage || defaultLanguage,
    selectedPage: 
      state.pages.isFetching ? 
      [] : 
      state.pages.items[state.selectedLanguage].some(page => page.slug.substring(0,4) === state.selectedPage) ? 
      state.selectedPage : "home",
    pages: state.pages.isFetching ? [] : state.pages.items[state.selectedLanguage]
  }
};

const withN = new withNamespaces()(Page)
export default connect(mapStateToProps)(withN);