//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - MailboxSidebar
//    DESCRIPTION - MailboxSidebar Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxLink from './MailboxLink'
import WorkFlowCandidate from './WorkFlowCandidate'
import axios from 'axios'
import {useQuery} from 'react-query'

function MailboxSidebar(props) {
    const [tabIndex, setTabIndex] = useState(0)

    console.log('can transferd from index', props.workflowCandidates)

    const tabSwitch = (index) => {
        setTabIndex(index)
        props.fun(index)
    }


    
    return (
        <>

            <aside className="" >
                <div className="py-4 rounded flex  ">
                    {
                        props.tabs.map((data) => (
                            <div onClick={() => tabSwitch(data.tabIndex)}><MailboxLink activeStatus={tabIndex == data.tabIndex ? true : false} title={data.title} /></div>
                        ))
                    }
                </div>

                {/* {
                    props?.candidateListStatus && <div className="shadow-xl bg-green-100 pt-4 border-t-4 border-green-500 h-40 sm:h-96 overflow-y-scroll">

                        {props?.workflowCandidates?.data.map((data) => {
                            return (
                                <>
                                    <WorkFlowCandidate designation={data.user_id} name={data.user_name} activeCandidateStatus={data.activeCandidateStatus} />
                                    <WorkFlowCandidate designation={data.user_id} name={data.user_name}  />
                                    <WorkFlowCandidate designation={data.user_id} name={data.role_name}  />
                                    <hr />
                                </>
                            )
                        })}



                    </div>
                } */}

            </aside>

        </>
    )
}

export default MailboxSidebar
/**
 * Exported to :
 * 1. Mailbox Component
 * 
 */