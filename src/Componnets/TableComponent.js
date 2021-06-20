import React, { Fragment } from 'react';
import {list} from '../Data/details';
import {truncate} from '../Componnets/Helpers/Helpers'

const TableComponent = () => {
    return (
        <Fragment>
        <table className="table table-hover">
            <thead>
                <tr><i className="fas fa-info-circle"></i>Details</tr>
            </thead>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>{list.id}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{list.name}</td>
                </tr>
                <tr>
                    <td>Token</td>
                    <td>{truncate(list.Token,7)}<i className="far fa-copy ml-2 cursor"></i></td>
                </tr>
                <tr>
                    <td>FQDN</td>
                    <td>{list.FQDN}</td>
                </tr>
                <tr>
                    <td>FLM Deps</td>
                    <td>{list.deps}</td>
                </tr>
                <tr>
                    <td>Connection</td>
                    <td className="connection">{list.Connection}<span className="dot ml-2"></span></td>
                </tr>
            </tbody>
        </table>

        </Fragment>
    )
}

export default TableComponent;
