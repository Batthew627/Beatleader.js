import Axios from 'axios';
import axiosRetry from 'axios-retry';
import { Score, ScoreCollection } from './types/LeaderboardData';

axiosRetry(Axios, {
    retries: 3,
});

export default class BeatLeaderAPI{
    private static BL_BASE_URL = 'https://api.beatleader.xyz/'

    private static async fetchPage(relativePath:string):Promise<unknown>{
        const response = await Axios.get(this.BL_BASE_URL + relativePath);
        return response.data as unknown;
    }

    public static async fetchPlayerScores(playerID:string):Promise<ScoreCollection>{
        
    }

    public static async fetchAllPlayerScores(playerId : string):Promise<ScoreCollection> {
        const firstPage = await this.fetchPage(`player/${playerId}/scores`) as ScoreCollection;
        const totalPages = Math.ceil(firstPage.metadata.total/firstPage.metadata.itemsPerPage)
        let scores = firstPage.data
        const promises = [];
        for (let i = 1; i <= totalPages; i++){
            const promise= await this.fetchPage(`player/${playerId}/scores?page=${i}`).then(scorePage=>{
                scores = scores.concat(scorePage.data)
            })
            promises.push(promise);
        }
        await Promise.all(promises);
        return scores;
    }
}