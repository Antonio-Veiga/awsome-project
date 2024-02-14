import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper } from 'three';
import { Observable, Observer, catchError, of, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'world-sandbox',
  templateUrl: './world-sandbox.component.html',
  styleUrls: ['./world-sandbox.component.scss'],
})
export class WorldComponent implements AfterViewInit {
  @Input({ required: true }) deviceType: 'mobile' | 'desktop' = 'mobile';
  @ViewChild('SandboxContainer', { static: true })
  public rendererContainer?: ElementRef;
  public glb = environment.glbFilePath;

  private scene: Scene = new Scene();
  private camera: PerspectiveCamera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    100,
    1000
  );
  private renderer: WebGLRenderer = new WebGLRenderer();
  public glb$: Observable<number | undefined> = this.loadGLBModel(
    this.glb
  ).pipe(
    catchError(() => of(undefined)),
    shareReplay(1)
  );

  private axesHelper = new AxesHelper(5);

  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };

  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene.add(this.axesHelper);
    this.camera.position.set(0, 0, 0);
    this.animate();
  }

  loadGLBModel(url: string): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      const loader = new GLTFLoader();
      loader.load(
        url,
        (gltf) => {
          this.scene.add(gltf.scene);
          observer.next(100);
          observer.complete();
        },
        (xhr) => {
          if (xhr.lengthComputable) {
            const progress = (xhr.loaded / xhr.total) * 100;
            observer.next(progress);
          }
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  ngAfterViewInit(): void {
    if (this.rendererContainer) {
      this.rendererContainer.nativeElement.appendChild(
        this.renderer.domElement
      );
    }
  }
}
