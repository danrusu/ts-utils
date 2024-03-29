type AssertionError = { message: string };

export default class SoftAssert {
  private collectedErrors: AssertionError[];

  constructor() {
    this.collectedErrors = [];
  }

  public assert(...assertions: Array<() => void>) {
    assertions.forEach((assertion) => {
      try {
        assertion();
      } catch (err) {
        this.collectedErrors.push(err as AssertionError);
      }
    });
  }

  public assertAll() {
    const allErrors = [...this.collectedErrors];
    this.collectedErrors = [];
    this.assertNoErrors(allErrors);
  }

  private assertNoErrors(errors: AssertionError[]) {
    if (errors.length > 0) {
      throw new Error(
        `${errors.length} failed assertions\n${errors
          .map((e) => e.message)
          .join('\n')}`,
      );
    }
  }
}
