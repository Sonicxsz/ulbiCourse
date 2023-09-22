export interface NoticeSchema {
    notice: Notice[],
    id: number
}


export interface Notice {
    id: number,
    message: string,
    delay: number 
}