router.post("/login", async (req, res) => {

  try {

    const { email, password, role } = req.body;

    const user = await User.findOne({
      email: email,
      role: role
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // Simple password check
    const isMatch =
      password === user.password;

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "secretkey"
    );

    res.json({
      message: "Login successful",
      token: token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

});