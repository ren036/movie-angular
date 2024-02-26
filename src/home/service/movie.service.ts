import { Injectable } from '@angular/core';
import { movieDTO, moviesDTO, NowDTO, UpcomingDTO ,Comment,Buy} from '../model/movie.model';
@Injectable({
    providedIn: 'root'
})
export class HomeService {
    ////////////Now正在上映的
    private NowStorage: { [id: string]: NowDTO[] } = {}
    //获取所有数据
    getAllNow(id: string): NowDTO[] {
        // console.log(this.NowStorage[id], 'allall');

        return this.NowStorage[id] || []
    }
    //now添加数据
    addNow(id: string, newNow: NowDTO) {
        if (!this.NowStorage[id]) {
            this.NowStorage[id] = []
        }
        this.NowStorage[id].push(newNow);
        this.getAllNow(id)
        // console.log('allservice中的all', this.getAllNow(id));

        // console.log('addadd', newNow);
    }
    //删除数据
    deleteNow(id: string, nowId: string) {
        if (this.NowStorage[id]) {
            this.NowStorage[id] = this.NowStorage[id].filter(item => item.id !== nowId);
        }
    }
    ////////////////评论
    private CommentStorage: { [id: string]: Comment[] } = {}
    //获取所有评论
    getAllComment(id: string): Comment[] {
        return this.CommentStorage[id] || []
    }
    //增加评论
    addComment(id: string, newComment: Comment) {
        if (!this.CommentStorage[id]) {
            this.CommentStorage[id] = []
        }
        this.CommentStorage[id].push(newComment)
        this.getAllComment(id)
    }
    ///////购票
    private BuyStorage: { [id: string]: Buy[] } = {}
    //获取所有购票数据
    getAllBuy(id:string):Buy[]{
        return this.BuyStorage[id]||[]
    }
    //新增购票订单
    addBuy(id:string,newBuy:Buy){
        if(!this.BuyStorage[id]){
            this.BuyStorage[id]=[]
        }
        this.BuyStorage[id].push(newBuy)
        this.getAllBuy(id),
        this.getAllNow(id)
        console.log('ALL购票',this.getAllBuy(id));
        
    }
    ////////即将上映的
    private UpcomingStorage: { [id: string]: UpcomingDTO[] } = {}
    //获取所有数据
    getAllUpcoming(id: string): UpcomingDTO[] {
        return this.UpcomingStorage[id] || []
    }
    //添加数据
    addUpcoming(id: string, newNow: UpcomingDTO) {
        if (!this.UpcomingStorage[id]) {
            this.UpcomingStorage[id] = []
        }
        this.UpcomingStorage[id].push(newNow)
        this.getAllUpcoming(id)
        // console.log('all', this.getAllUpcoming(id));

        // console.log('addadd', newNow, 'all', this.getAllUpcoming(id));
    }
    //删除数据
    deleteUpcoming(id: string, nowId: string) {
        if (this.UpcomingStorage[id]) {
            this.UpcomingStorage[id] = this.UpcomingStorage[id].filter(item => item.id !== nowId);
        }
    }

    //获取所有数据
    getAllMovies(id: string): moviesDTO[] {
        const nowMovies=this.getAllNow(id);
        const upcomingMovies=this.getAllUpcoming(id)
        const allMovies:moviesDTO[]=[
            ...nowMovies.map(movie=>({...movie,type:'now'})),
            ...upcomingMovies.map(movie => ({...movie,type:'upcoming'}))
        ]
        return allMovies;
    }
}