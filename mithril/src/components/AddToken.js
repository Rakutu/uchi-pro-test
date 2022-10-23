import { Header } from './Header/Header';


const renderAddResult = (status) => {
  switch (status) {
    case 'success': {
      return (
        <div class="alert alert-success" role="alert">
          The token has been successfully added!
        </div>
      )
    }
    case 'failure': {
      return (
        <div className="alert alert-danger" role="alert">
          Something went wrong!
        </div>
      )
    }
    default: return '';
  }
}

export const AddToken = ({ addToken }) => ({
  inputValue: '',
  addStatus: '',
  view: ({ tag }) => {
    const handleSubmit = async (event) => {
      event.preventDefault();

      const token = await addToken(tag.inputValue);
      if (!token) return tag.addStatus = 'failure';

      tag.addStatus = 'success';

      setTimeout(() => {
        m.route.set('/');
        tag.inputValue = '';
        tag.addStatus = '';
      }, 1000);
    }

    return (
      <>
        <Header/>
        <div class="container">
          <button
            class="btn btn-primary mb-2"
            onclick={() => m.route.set('/')}
          >
            Back
          </button>
          <form className="input-group mb-4">
            <input
              id="domain"
              value={tag.inputValue}
              type="text"
              class="form-control"
              oninput={({ target }) => tag.inputValue = target.value}
            />
            <button
              class="btn btn-success"
              onclick={handleSubmit}
            >
              Add token
            </button>
          </form>
          {renderAddResult(tag.addStatus)}
        </div>
      </>
    )
  }
})
