const loadTeams = async () => {
  const axios = require("axios");

  var testes = await axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/2', {
    headers:{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
      "x-rapidapi-key":"9fe884c823msh344029b0d886ec7p14927cjsncc0da9e18971",
      "useQueryString":true
      }
    } 
  );
  
  
  console.log(1,testes.data);
  return testes.data;
}
  

export default loadTeams;
