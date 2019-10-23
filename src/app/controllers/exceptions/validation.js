const handleValidation = async error => {
  const errors = await error.inner.map(e => {
    return { path: e.path, type: e.type, message: e.message };
  });
  return { error: 'Validation fails', errors };
};

export default handleValidation;
