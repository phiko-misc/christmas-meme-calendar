import { GetStaticProps } from "next";


export default function index() {
    return (
        <div>Welcome to the secret</div>
    );
}

export const getServerSideProps = (async (context) => {
    return {
        redirect: {
            permanent: false,
            destination: "/",
        },
    };
}) satisfies GetStaticProps;