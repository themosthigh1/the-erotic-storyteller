

export interface Book {
 map(arg0: (book: { _id: import("react").Key | null | undefined; price: number; slug: { current: any }; description: string; image: any; title: string; urlForBuy: string }) => import("react").JSX.Element): import("react").ReactNode
    
 _id: number,
 title: string,
 slug: {current: string},
 image: {asset: string},
 price: number,
 description: string,
 details: string,
 series: string,
 urlForBuy: string,
 _createdAt: string

}