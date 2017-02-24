export class Club {
  constructor(
    public name: string,
    public about: string,
    public image: string
  ){  }
}

export const CLUBS: Club[] = [
  { name: 'club1', about: 'info about club1', image: 'img1' },
  { name: 'club2', about: 'info about club2', image: 'img2' },
  { name: 'club3', about: 'info about club3', image: 'img3' },
  { name: 'club4', about: 'info about club4', image: 'img4' }
];