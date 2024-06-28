
const weather =()=>{
 const baseurl=process.env.REACT_APP_BASE_URL;
const apikey=process.env.REACT_APP_API_KEY;
    return(
        <div>
            <p> API key:{apikey}</p>
            <p>API URL:{baseurl}</p>
        </div>
    );
};
export default weather;
