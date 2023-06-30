/*Template code from: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/*/

/*TODO: Replace the table title with the category names inside of the Database*/
/*TODO: Replace all data inside each table with the related info inside of the Database.*/
/*TODO: Replace the hardcoded <tr>s with 1 <tr> per post found in the database.*/

class topic_table extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <div class="row">
    <h1>{Topic}</h1>
    </div>
    <table class = table>
        <thead>
            <tr>
                <th>Post title</th>
                <th># Comments</th>
                <th>Latest comment poster</th>
                <th>Latest comment datetime</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Post 1</td>
                <td>X Comments</td>
                <td>Poster</td>
                <td>Datetime</td>
            </tr>
            <tr>
                <td>Post 2</td>
                <td>X Comments</td>
                <td>Poster</td>
                <td>Datetime</td>
            </tr>
            <tr>
                <td>Post 3</td>
                <td>X Comments</td>
                <td>Poster</td>
                <td>Datetime</td>
            </tr>
        </tbody>

    </table>
    `;
  }
}

  customElements.define('topic-table-component', topic_table);