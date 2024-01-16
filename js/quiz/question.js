export const renderQuestion = (name) => {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('hello-question')

    let text = '<div>'

    if (!name) {
        text += '<p data-testid="question-test">Hello, Question?</p>'
    } else if (name === 'Thomas') {
        text += '<p>Hello cher Auteur</p>'
    } else {
        text += '<p>Hello cher Inconnu</p>'
    }

    text += '</div>'

    $wrapper.innerHTML = text

    return $wrapper
}
