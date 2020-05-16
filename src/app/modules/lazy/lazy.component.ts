import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit, OnDestroy {
  @ViewChild('compContainer', { read: ViewContainerRef })
  compoContainer: ViewContainerRef;
  components: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.compo
  }

  renderComponent(component) {
    this.compoContainer.clear();

    const compFactory = this.cfr.resolveComponentFactory(component);
    const componentRef: any = this.compoContainer.createComponent(compFactory);

    console.log('HEMANT Tanya', componentRef);
    // if (comp.data) {
    //   componentRef.instance.data = comp.data;
    // }
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
    }
  }
}
