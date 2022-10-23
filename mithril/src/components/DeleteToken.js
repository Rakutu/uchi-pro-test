import { Header } from './Header/Header';


const renderDeleteResult = (status) => {
  switch (status) {
    case 'success': {
      return (
        <div class="alert alert-success" role="alert">
          The token has been successfully deleted!
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

export const DeleteToken = ({ deleteToken }) => {
  return {
    id: '',
    domain: '',
    deleteStatus: '',
    oninit: ({ tag }) => {
      tag.id = m.route.param('id');
      tag.domain = m.route.param('domain');
    },
    view: ({ tag }) => {
      const handleDelete = async () => {
        try {
          await deleteToken(tag.id);

          tag.deleteStatus = 'success';
        } catch (error) {
          tag.deleteStatus = 'failure';

          throw error;
        } finally {

          setTimeout(() => {
            m.route.set('/');
            tag.deleteStatus = '';
          }, 1000);
        }
      }

      return (
        <>
          <Header/>
          <div class="container">
            <div class="card mb-4">
              <div class="card-body">
                <h2 className="card-title">Delete Token</h2>
                <p className="card-text">
                  Do you really want to delete this token for this "{tag.domain}" organization
                </p>
                <div class="btn-group">
                  <button
                    class="btn btn-danger"
                    onclick={handleDelete}
                  >
                    Yes
                  </button>
                  <button
                    class="btn btn-primary"
                    onclick={() => m.route.set('/')}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
            {renderDeleteResult(tag.deleteStatus)}
          </div>
        </>
      )
    }
  }
}