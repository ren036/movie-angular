//总电影数
export interface moviesDTO{
    id:string;
    name:string;
    icon:string;
    description: string;//简介
    like:number;//喜欢数(想看数)
    releasetime?: string;//上映时间
    ordernum?: number;//订票数
    createtime?: any;//创建时间
    no?:number;//序号
    comment?:Comment[]
    buy?:Buy[]
}

export interface movieDTO{
    id:string;
    name:string;
    icon:string;
    description: string;//简介
    like:number;//喜欢数(想看数)
    releasetime?: string;//上映时间

    // now?:NowDTO[];
    // upcoming?:UpcomingDTO[]
}
//正在上映的
export interface NowDTO extends movieDTO{
    releasetime: any;//上映时间
    ordernum: number;//订票数
    no?:number;//序号
    comment?:Comment[]//评论
    buy?:Buy[]//购票
}
export interface Comment{
    id:string;
    name:string;
    description:string;
}
export interface Buy{
    id:string
    time:string;//时间
    site:string;//地点
    seat:string;//座位
}
//即将上映的
export interface UpcomingDTO extends movieDTO{
    createtime:string//创建时间
}

