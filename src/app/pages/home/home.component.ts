import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/dangerous.mp3',
    },
    {
      song_id: 2,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 3,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'DJ Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 4,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Party Mashup Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 5,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'HeartBreak Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/Bezubaan.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Spiritual Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 7,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Religional Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'English Mashups',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Motivational Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
  ];

  constructor (private sb: SearchBarService){}
  ngOnInit(): void {
    
  }

  onNavigateToSearch(){
    this.sb.isSearchVisible.next(true);
  }

}
