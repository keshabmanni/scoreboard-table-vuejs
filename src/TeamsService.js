import axios from 'axios';

const url = 'http://localhost:5000/api/teams';

class TeamsService {
    //get
    
    static getTeams(){
                    axios.get(url).then(function(resp){
                        const data = resp.data;
                        console.log((data))
                        data.map(team => ({
                            ...team,
                            createdAt: new Date(team.createdAt)
                        }))
                        return data;
                    })    
    }
    //create
    static insertTeams(text){
        return axios.post(url, {
            text
        });
    }

}

export default TeamsService;