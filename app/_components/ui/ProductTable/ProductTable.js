import React from 'react';
import CustomTableRow from "@/app/_components/ui/ProductTable/CustomTableRow";
import {CustomCard} from "@/app/_components/ui/CustomCard";

const headerData = [
    {id: 1, text: "Product"},
    {id: 2, text: "Price"},
    {id: 3, text: "Quantity"},
    {id: 4, text: "Subtotal"}
];

function ProductTable({productData}) {


    const tableHead =
        headerData.length > 0 &&
        headerData.map((row, index) => {
            return (
                <CustomTableRow
                    type="thead"
                    key={index}
                    rowData={row}
                />
            );
        });

    const tableBody = productData.map((row, index) => {
        return (
            <CustomTableRow
                type="tbody"
                key={index}
                rowData={row}
            />
        );
    });


    return (

        <div className="flex flex-col">
            <CustomCard className="shadow grid grid-cols-4 p-[40px_24px] rounded-md my-10">
                {tableHead}
            </CustomCard>
                {tableBody}


        </div>
    );
}

export default ProductTable;