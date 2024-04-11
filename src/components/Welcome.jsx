import Protected from "./Protected";

export default function Welcome() {

    return(
        <Protected>
            <h1>welcome to my protected route</h1>
        </Protected>
    );
};