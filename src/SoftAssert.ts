export default class SoftAssert {
  private assertions: Array<() => void> = [];

  add(...newAssertions: Array<() => void>) {
    this.assertions = [...this.assertions, ...newAssertions];
  }

  assertAll() {
    const collectedErrors: Array<Error> = [];
    this.assertions.forEach((assertion) => {
      try {
        assertion();
      } catch (err) {
        collectedErrors.push(err);
      }
    });
    this.assertions = [];

    this.assertNoErrors(collectedErrors);
  }

  private assertNoErrors(errors: Array<Error>) {
    if (errors.length > 0) {
      throw new Error(
        `${errors.length} failed assertions\n${errors
          .map((e) => e.message)
          .join('\n')}`,
      );
    }
  }
}
