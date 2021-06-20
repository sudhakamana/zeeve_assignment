import React, { Fragment } from 'react'
import AssociatedTable from './AssociatedTable';
import TableComponent from './TableComponent';

const DashBoardComponent = () => {
    return (
        <Fragment>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom mt-5">
                
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <h4>Dashboard</h4>
                <div>
                    &gt; <i className="fas fa-home"></i>
                    
                </div>
                
                    </div>
                    <div className="col-lg-4">
                        <div className="card mt-3 card-table" >
                            <div className="card-body">
                                <TableComponent />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mt-3 card-table">
                            <div className="card-body">
                                <AssociatedTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default DashBoardComponent;