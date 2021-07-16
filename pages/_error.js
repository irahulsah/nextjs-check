import React from 'react'

const Error = ({statusCode}) => {
    return (
        <div>
            <h1>This is error page ${statusCode}</h1>
        </div>
    )
}
export const getServerSideProps = async ({ res }) => {
    let statusCode = 500;
    if (res?.statusCode) statusCode = res.statusCode;
  
    return {
      props: {
        statusCode,
      },
    };
  };
export default Error;
