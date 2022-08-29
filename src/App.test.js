import { render } from 'inferno';
import { it } from 'inferno';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
