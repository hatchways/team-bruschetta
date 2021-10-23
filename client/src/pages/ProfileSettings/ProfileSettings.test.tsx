import { render, screen } from '@testing-library/react';
import ProfileSettings from './ProfileSettings';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import MockAuthProvider from '../../mocks/mockUseAuthProvider';

describe('ProfileSettings tests', () => {
  test('smoke test', () => {
    render(
      <MockAuthProvider>
        <ProfileSettings />
      </MockAuthProvider>,
    );
  });

  test('should have the PhotoUpload component and its children', () => {
    render(
      <MockAuthProvider>
        <ProfileSettings />
      </MockAuthProvider>,
    );
    expect(screen.getByText('Profile Photo')).toBeInTheDocument();
    expect(screen.getByText('Delete photo')).toBeInTheDocument();
    expect(screen.getByText('Upload a file from your device')).toBeInTheDocument();
    expect(screen.getByRole('upload-avatar')).toBeInTheDocument();
  });
});
