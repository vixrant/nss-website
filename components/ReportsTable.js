import React from 'react';
import { Table, Button } from 'reactstrap';

import "./ReportsTable.css";

const ReportsTable = () => (
    <Table id="ReportsTable">
        <thead>
            <tr>
                <h3>
                    Annual&nbsp;Reports
                </h3>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="#" onClick={() => alert("Give report")}>2018 - 2019</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#" onClick={() => alert("Give report")}>2017 - 2018</a>
                </td>
            </tr>
        </tbody>
    </Table>
);

export default ReportsTable;
