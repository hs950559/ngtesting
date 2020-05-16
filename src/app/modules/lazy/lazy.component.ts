import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  ComponentRef,
} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit, OnDestroy {
  @ViewChild('compContainer', { read: ViewContainerRef })
  compoContainer: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  renderComponent(component) {
    this.compoContainer.clear();

    const compFactory = this.cfr.resolveComponentFactory(component);
    this.componentRef = this.compoContainer.createComponent(compFactory);

    console.log('HEMANT', this.componentRef);
  }

  async loadComponent(compName) {
    switch (compName) {
      case 'VoteComponent': {
        const { VoteComponent } = await import(
          '../../components/vote/vote.component'
        );
        this.renderComponent(VoteComponent);
        break;
      }
      case 'PipesComponent': {
        const { PipesComponent } = await import(
          '../../components/pipes/pipes.component'
        );
        this.renderComponent(PipesComponent);
        break;
      }
    }
  }
}
