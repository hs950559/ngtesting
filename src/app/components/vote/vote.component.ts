import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: `
    <div class="voter">
      <button
        class="btn btn-info"
        (click)="upVote()"
        [class.disabled]="myVote == 1"
      >
        <i class="ti-arrow-up"></i>
      </button>

      <span class="vote-count mx-4">{{ totalVotes }}</span>

      <button
        class="btn btn-info"
        (click)="downVote()"
        [class.disabled]="myVote === -1"
      >
        <i class="ti-arrow-down"></i>
      </button>
    </div>
  `,
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote === 1) {
      return;
    }

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote === -1) {
      return;
    }

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }
}
