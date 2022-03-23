export default class SoftAssert {
  private assertions: Array<() => void> = [];

  add(...toAssert: Array<() => void>) {
    this.assertions = [...this.assertions, ...toAssert];
  }

  assertAll() {
    const collectedErrors = [];
    this.assertions.forEach(assertion => {
      try {
        assertion();
      } catch (err) {
        collectedErrors.push(err);
      }
    });
    this.assertions = [];

    this.assertNoErrors(collectedErrors);
  }

  private assertNoErrors(errors: Array<any>) {
    if (errors.length > 0) {
      throw new Error(
        `${errors.length} failed assertions\n${errors
          .map(e => e.message)
          .join('\n')}`
      );
    }
  }
}
