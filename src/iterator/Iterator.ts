export interface Iterator {
  hasMore(): boolean ;
  getNext(): Element ;
}