import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CreativeEditorSDK, { Configuration } from '@cesdk/cesdk-js';

@Component({
  selector: 'app-journal-editor',
  template: `
    <div class="main-content">
      <div class="journal-editor-container">
        <div #cesdk_container style="height: 600px; width: 100%;"></div>
      </div>
    </div>
  `,
  styleUrls: ['../../styles.css'],
  standalone: true,
})
export class JournalEditorComponent implements AfterViewInit {
  @ViewChild('cesdk_container', { static: true }) containerRef!: ElementRef;
  bookId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit(): void {
    const config: Configuration = {
      license: 'YOUR_LICENSE_KEY',
      baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.54.1/assets',
      callbacks: { onUpload: 'local' },
    };

    CreativeEditorSDK.create(this.containerRef.nativeElement, config).then(
      async (instance: any) => {
        instance.addDefaultAssetSources();
        instance.addDemoAssetSources({ sceneMode: 'Design' });
        await instance.createDesignScene();
      }
    );
  }
}
