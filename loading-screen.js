class LoadingScreen {
    constructor() {
        this.content = undefined
        this.loadingAnimation = [`<div class="scene">
        <div class="shadow"></div>
        <div class="jumper">
          <div class="spinner">
            <div class="scaler">
              <div class="loader">
                <div class="cuboid">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`]

    }

    render() {

        this.addCss()
        this.createDomElements()
        //this.addOnLoadEvent()
    }
    addCss() {
        const stylesheet = document.createElement('link')
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', `./assets/scripts/loading-screen/loading-screen.css`);
        document.head.appendChild(stylesheet);
        document.body.style.display = 'none'
    }

    addOnLoadEvent() {
        document.body.addEventListener('load', function (e) {

        })
    }

    createDomElements() {
        this.content = document.createElement('div')
        this.content.id = 'LoadingScreen'

        this.content.innerHTML = this.loadingAnimation[0]
        document.querySelector('body').before(this.content)
    }
    handleLoaded() {
        document.body.style.display = 'block';
        this.content.style.display = 'none'
    }
}

const loadingScreen = new LoadingScreen()

loadingScreen.render()