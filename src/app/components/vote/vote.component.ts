import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: `
    <p>Total votes: {{ totalVotes }}</p>
    <button class="btn btn-primary" (click)="upVote()">
      <i class="ti-arrow-up"></i>
      Up Vote
    </button>
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
