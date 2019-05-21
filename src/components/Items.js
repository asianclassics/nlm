import React from 'react'
import { connect } from 'react-redux'

import Something from './Something'
import Modal from './Modal'

import { fetchSpecificID, browseOptionsObj, IIIFsuffix } from '../store/actions'

import { log } from '../store/connection'

import '../assets/css/items.css'


const Items = (props) => {
    let currentESdata = browseOptionsObj.find(x => x.browse === props.browse)
    
    if(!props[currentESdata.stateType].length) {
        return (
            <div className="blinky">LOADING {`${props.browse}S`}</div>
        )
    }

    // fetch ID from ES and show modal
    const handleShowModal = (doc_id, resources = null, imageURL = null, manifestURL = null) => {
        props.dispatch(fetchSpecificID(doc_id))
        //this.props.dispatch(fetchResources(doc_id, resources))
        props.dispatch(
            { type: 'DETAIL_MODAL', modalID: doc_id, image: imageURL, manifest: manifestURL, show: true }
        )
    }

    // close modal and nullify the IIIF image so there's no flash
    // of previous image on next modal
    const handleHideModal = () => {
        props.dispatch({ type: 'DETAIL_MODAL', show: false})
        props.dispatch({ type: 'NULLIFY_IIIF'})
    }

    const things = props[currentESdata.stateType].map((d, i) => {
        //let _id = null, _resources = null, _firstImageURL = null, _manifestURL = null
        const { _resources, _firstImageURL, _manifestURL } = d._source
        let imageURL = _firstImageURL === "Not Found" 
                ? "Not Found"
                : `${_firstImageURL}/${IIIFsuffix}`
        return (
            <div key={i}>
                <span 
                    className="item-title card-item-link"
                    onClick={() => handleShowModal(d._id, _resources, imageURL, _manifestURL)}
                >{d._tid}</span>
                {d._related ? <Something related={d._related} /> : null}
            </div>
        )
    })

    return (
        <div>
            {things}
            {props.doc_id == null ? null : 
            <Modal 
                key={props.doc_id}
                hideModal={handleHideModal}
                doc_id={props.doc_id}
                show={props.showModal}
            /> }
        </div>
    )
}

const mapStateToProps = (state) => ({
    esWorks: state.esWorks.isFetching ? [] : state.esWorks.items.hits.hits,
    esAuthors: state.esAuthors.isFetching ? [] : state.esAuthors.items.hits.hits,
    esSubjects: state.esSubjects.isFetching ? [] : state.esSubjects.items.hits.hits,
    browse: state.setBrowse,
    collapse: state.setCollapse,
    doc_id: state.detailModal.modalID,
    showModal: state.detailModal.show
})


//const withN = new withNamespaces()(Archives)
export default connect(mapStateToProps)(Items)
//export default Items