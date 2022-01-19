import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('click buttons and text shows in screen component', async () => {
	render(<App />);
	const firstWord = screen.getByText('I');
	const secondWord = screen.getByText('brush');
	const thirdWord = screen.getByText('my');
	const fourWord = screen.getByText('teeth.');
	userEvent.click(firstWord);
	userEvent.click(secondWord);
	userEvent.click(thirdWord);
	userEvent.click(fourWord);
	const screenParagraph = screen.getByTestId('screen');
	expect(screenParagraph).toHaveTextContent('I brush my teeth.');
});
