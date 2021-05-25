import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect} from "react";
import { fetch_data } from '../component/variables/api'

export default function test() {
    let json = {
        "action": "list",
        "table": "tx_hdr_user",
      }
      const [data, setData] = useState();
      useEffect(() => {
        fetch_data("POST", "http://localhost/samson/list", json).then(function (result) {
            setData(result.data);
          });
      }, [])
      
      return (
        <>
            <table width="100%">
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Created Date</th>
                </tr>
                {data ? data.map((value) =>{
                    return( <>
                        <tr>
                            <td>{value.user_name}</td>
                            <td>{value.user_password}</td>
                            <td>{value.user_created_date}</td>
                        </tr>
                    </>)
                }):""}
            </table>
        </>
      );
    }