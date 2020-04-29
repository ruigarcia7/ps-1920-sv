constructor(
  private ?id: number,
  private ?name: string,
  private ?address: string,
  private ?zip: number,
  private ?gender: string
){
  this.id = id ? id : 0
}
