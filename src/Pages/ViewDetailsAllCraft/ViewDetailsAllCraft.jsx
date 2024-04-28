import { useLoaderData } from "react-router-dom";


const ViewDetailsAllCraft = () => {
    const data = useLoaderData()
    return (
        <div>
            {data.length}
        </div>
    );
};

export default ViewDetailsAllCraft;