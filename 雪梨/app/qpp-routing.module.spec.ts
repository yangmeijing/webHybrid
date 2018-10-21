import { QppRoutingModule } from './qpp-routing.module';

describe('QppRoutingModule', () => {
  let qppRoutingModule: QppRoutingModule;

  beforeEach(() => {
    qppRoutingModule = new QppRoutingModule();
  });

  it('should create an instance', () => {
    expect(qppRoutingModule).toBeTruthy();
  });
});
