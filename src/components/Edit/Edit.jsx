import React from "react";
import "./Edit.scss";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { productId } = useParams();
    return (
        <div>
            {productId}
        </div>
    );
}

export default Edit;
