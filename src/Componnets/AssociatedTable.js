import React, { Fragment } from 'react';
import {list2} from '../Data/details';

const AssociatedTable = () => {
    return (
        <Fragment>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <i class="fas fa-star-of-david"></i> Associated Fedaration - 1
                    </tr>
                    <tr>
                        <th>Fed Tag</th>
                        <th>Fed Status</th>
                        <th>Plan Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{list2.fedtag}</td>
                        <td><button className="btn ass-btn btn-sm btn-success">{list2.Status} </button></td>
                        <td>{list2.name}</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default AssociatedTable;