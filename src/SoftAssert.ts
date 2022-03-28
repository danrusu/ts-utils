export default class SoftAssert {
  private collectedErrors: Array<any> = [];

  assert(...assertions: Array<() => void>) {
    assertions.forEach((assertion) => {
      try {
        assertion();
      } catch (err) {
        this.collectedErrors.push(err);
      }
    });
  }

  assertAll() {
    const allErrors = [...this.collectedErrors];
    this.collectedErrors = [];
    this.assertNoErrors(allErrors);
  }

  private assertNoErrors(errors: Array<any>) {
    if (errors.length > 0) {
      throw new Error(
        `${errors.length} failed assertions\n${errors
          .map((e) => e.message)
          .join('\n')}`,
      );
    }
  }
}
