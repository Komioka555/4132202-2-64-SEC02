import React from "react";


function GenTable(peoples){
    return (peoples.map((people)=>{
        const {id,name:rname,age}=people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>

        )
    }))
}
    
function DataTable(){
    const students=[{
        id:1,
        name:"kiw",
        age:20,
    },
    {
        id:2,
        name:"kiwwy",
        age:21,  
    }
];
return(
    <table>
        <tbody>{GenTable(students)}</tbody>
    </table>
)
}

export default DataTable;