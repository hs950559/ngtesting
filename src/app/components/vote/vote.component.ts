import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: `
    <p>
      vote works!
    </p>
  `,
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
