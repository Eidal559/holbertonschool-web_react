function Header() {
    const { user, logout } = useContext(AppContext);
    return (
      <React.Fragment>
        <div className="header">
          {/* Preserve any existing branding/logo/h1, etc. */}
          <h1>School dashboard</h1>
        </div>
        {/* If user is logged in, show a welcome message and the logout link */}
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome <b>{user.email}</b> 
            <span onClick={logout}> (logout)</span>
          </section>
        )}
      </React.Fragment>
    );
  }
  