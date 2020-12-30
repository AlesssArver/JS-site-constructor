export const row = (content, styles = {
    background: '',
    color: '',
    'margin-top': '',
    'margin-bottom': ''
}) => {
    return `
    <div class="row" style="${css(styles)}">
        ${content}
    </div>
`
}

export const col = (content, styles = {
    background: '',
    color: '',
    marginTop: '',
    marginBottom: ''
}) => {
    return `
        <div class="col-sm" style="${css(styles)}">
            ${content}
        </div>
    `
}

export const css = (styles = {}) => {
    if (typeof style === 'sting') {
        return styles
    }
    const toString = value => `${value}: ${styles[value]}`
    return Object.keys(styles).map(toString).join(';')
}

export const block = (type) => {
    fetch('./form.html')
        .then(r => r.text())
        .then(data => console.log(data))

    return `
        <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${type}" 
            aria-expanded="false" 
            aria-controls="${type}">
            Open: ${type}
        </button>
        <form class="collapse multi-collapse" name="${type}" id="${type}">
            <h5>${type}</h5>
            <div class="mb-3">
                <input class="form-control form-control-md" name="value" placeholder="Text">
            </div>
            <div class="mb-3">
                <select class="form-select" name="tag" aria-label="Default select example">
                    <option selected>Tag</option>
                    <option value="h1">h1</option>
                    <option value="h2">h2</option>
                    <option value="h3">h3</option>
                    <option value="h4">h4</option>
                    <option value="h5">h5</option>
                    <option value="h6">h6</option>
                    <option value="p">p</option>
                    <option value="span">span</option>
                    <option value="div">div</option>
                </select>
            </div>
            <h4>Margin</h4>
            <div class="form-group mb-3 row">
                <div class="col">
                    <input class="form-control form-control-md" name="marginTop" placeholder="top">
                </div>
                <div class="col">
                    <input class="form-control form-control-md" name="marginBottom" placeholder="bottom">
                </div>
            </div>
            <div class="form-group mb-3 row">
                <div class="col">
                    <label for="background" class="col-form-label">Background</label>
                    <input type="color" class="form-control form-control-md" name="background" id="background" placeholder="Background">
                </div>
                <div class="col">
                    <label for="color" class="col-form-label">Text color</label>
                    <input type="color" class="form-control form-control-md" name="color" id="color" placeholder="Color">
                </div>
            </div>
            <button type="submit" class="add--btn btn btn-primary btn-sm">Add</button>
        </form>
    `
}