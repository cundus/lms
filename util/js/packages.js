// di sini kita membuat custom tag untuk melakukan import library yang akan seirng dipakai

class Packages extends HTMLElement {
  connectedCallback() {
    ;`
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

        `
  }
}

customElements.define("import-packages", Packages)
