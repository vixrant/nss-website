import React from 'react';
import { Table, Button } from 'reactstrap';

import "./ReportsTable.css";

const ReportsTable = () => (
    <Table hover id="ReportsTable">
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
                    2018 - 2019
                </td>
            </tr>
            <tr>
                <td>
                    2017 - 2018
                </td>
            </tr>
        </tbody>
    </Table>
);

export default ReportsTable;
